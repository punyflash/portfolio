<script lang="ts">
    import type { ProjectResourceType } from "@/types";

    const { project }: { project: { data: ProjectResourceType }} = $props()

    $inspect(project)
</script>

<div class="flex-1 p-8 flex flex-col">
    <div class="container">
        <h1 class="text-3xl font-bold mb-4">{project.data.title}</h1>
        <p>{project.data.description}</p>
        {@html project.data.content}
    </div>
</div>
