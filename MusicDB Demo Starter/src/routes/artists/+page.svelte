<script>
  
 let { data } = $props();

</script>

<h1>List of all Artists</h1>
<p>{data.message}</p>
<a href="/artists/create">+ Add Artist</a>
<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Origin</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {#each data.artists as artist}
      <tr>
        <td>
          <a href={"/artists/" + artist._id}>
            {artist._id}
          </a>
        </td>
        <td>
          {artist.name}
        </td>
        <td>
          {artist.origin}
        </td>
        <td>
          <form>
            <button class="btn btn-danger">X</button>
          </form>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
