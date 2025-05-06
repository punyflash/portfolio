<?php

namespace App\Actions;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations;
use Illuminate\Support\Facades\Schema;
use ReflectionMethod;
use Vagebond\Runtype\Actions\ListModelRelations as Original;

class ListModelRelations extends Original
{
    protected $relationReturns = [
        Relations\HasOne::class,
        Relations\BelongsTo::class,
        Relations\MorphOne::class,
        Relations\MorphTo::class,
        Relations\MorphMany::class,
        Relations\MorphToMany::class,
        Relations\BelongsToMany::class,
        Relations\HasMany::class,
        Relations\HasManyThrough::class,
        Relations\MorphToMany::class,
    ];

    public function handle(Model $model): array
    {
        return collect(get_class_methods($model))
            ->map(fn ($method) => new ReflectionMethod($model, $method))
            ->reject(
                fn (ReflectionMethod $method) => $method->isStatic()
                    || $method->isAbstract()
                    || $method->getDeclaringClass()->getName() !== get_class($model)
            )
            ->filter(function (ReflectionMethod $method) {
                $return = $method->getReturnType();

                return $return instanceof \ReflectionNamedType
                    && in_array($return->getName(), $this->relationReturns);
            })
            ->map(function (ReflectionMethod $method) {
                return $method->getName();
            })
            ->merge(parent::handle($model))
            ->unique()
            ->values()
            ->toArray();
    }
}
