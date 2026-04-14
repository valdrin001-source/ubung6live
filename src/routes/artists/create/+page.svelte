<script>
  let { form } = $props();
</script>

<a href="/artists">Back</a>
<h1>Add an artist</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Origin</label>
    <input name="origin" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary"> Add Artist </button>
</form>

{#if form?.success}
  <p>Artist created</p>
{/if}
