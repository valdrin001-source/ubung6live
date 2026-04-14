<script>
  let albums = $state([
    {
      _id: "6286343cf8470b9fd1b09962",
      title: "Random Access Memories",
      released: "2013",
      label: "Columbia",
      genres: ["Disco", "Funk", "Electronic"],
      artists: [
        "6286354bf8470b9fd1b09965",
        "646b9a67c15e6199b1ec0b41",
        "646b9a2ac15e6199b1ec0b40",
        "646b9a67c15e6199b1ec0b41",
      ],
    },
    {
      _id: "628635dff8470b9fd1b09968",
      title: "Ivory Tower",
      released: "2010",
      label: "Gentle Threat",
      genres: ["Disco", "Hip Hop"],
      artists: [],
    },
  ]);
</script>

<h1>List of all Albums</h1>
<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Released</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    {#each albums as album}
      <tr>
        <td>
          <a href={"/albums/" + album._id}>
            {album._id}
          </a>
        </td>
        <td>
          {album.title}
        </td>
        <td>
          {album.released}
        </td>
        <td>
          {album.label}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
