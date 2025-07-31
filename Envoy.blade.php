@include('vendor/autoload.php')

@setup
    Dotenv\Dotenv::create(Illuminate\Support\Env::getRepository(),  __DIR__)->load();

    $production ??= env('DEPLOY_PRODUCTION', '127.0.0.1');
    $dir ??= env('DEPLOY_DIR', './');
    $on ??= 'local';
@endsetup

@servers([
    'local' => ['127.0.0.1'],
    'production' => [$production],
])

@task('deploy', ['on' => $on])
    cd {{ $dir }}

    php artisan down

    git reset
    git clean -df
    git fetch
    git pull

    composer install -n -o --no-dev --prefer-dist --no-progress
    php artisan optimize
    php artisan migrate --force
    php artisan storage:link --force

    php artisan up
@endtask

@task('upload-assets', ['on' => 'local'])
    scp -r bootstrap/ssr/* {{ $production }}:{{ $dir }}/bootstrap/ssr
    scp -r public/build/* {{ $production }}:{{ $dir }}/public/build
@endtask
