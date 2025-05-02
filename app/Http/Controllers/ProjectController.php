<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects/Index', [
            'projects' => Inertia::deepMerge(
                fn () => ProjectResource::collection(
                    Project::select(['id', 'title', 'slug', 'description'])->cursorPaginate(12)
                ),
            ),
        ]);
    }

    public function show(Project $project)
    {
        return Inertia::render('Projects/Show', [
            'project' => fn () =>new ProjectResource($project),
        ]);
    }
}
