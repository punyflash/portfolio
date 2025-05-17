<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\SitemapGenerator;

class GenerateSitemap extends Command
{
    protected $signature = 'app:sitemap:generate';

    protected $description = 'Generate sitemap for the application';

    public function handle()
    {
        SitemapGenerator::create(url('/'))->writeToFile(public_path('sitemap.xml'));

        return static::SUCCESS;
    }
}
