<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->company(),
            'subtitle' => $this->faker->company(),
            'description' => $this->faker->text(),
            'content' => $this->faker->text(),
            'started_at' => $this->faker->dateTime(),
            'ended_at' => $this->faker->dateTime(),
        ];
    }
}
