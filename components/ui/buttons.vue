<template>
  <main>
    Buttons
    <section>
      <custom-button> Primary button </custom-button>
      <custom-button color="secondary"> Secondary button </custom-button>
      <custom-button color="success"> Success button </custom-button>
      <custom-button color="warning"> Warning button </custom-button>
      <custom-button color="danger"> Danger button </custom-button>
    </section>
    <section class="mt-8">
      <custom-button variant="outlined"> Primary button </custom-button>
      <custom-button variant="outlined" color="secondary">
        Outlined Secondary
      </custom-button>
      <custom-button variant="outlined" color="success">
        Outlined Success button
      </custom-button>
      <custom-button variant="outlined" color="warning">
        Outlined Warning button
      </custom-button>
      <custom-button variant="outlined" color="danger">
        Outlined Danger button
      </custom-button>
    </section>
    <section class="mt-8 flex">
      <custom-button color="danger" size="small"> Small button </custom-button>
      <custom-button color="danger" size="normal">
        Normal button
      </custom-button>
      <custom-button color="danger" size="large"> Large button </custom-button>
    </section>
    <section class="mt-8 flex">
      <custom-button color="secondary" rounded="small">
        Small button
      </custom-button>
      <custom-button color="secondary" rounded="normal">
        Normal button
      </custom-button>
      <custom-button variant="outlined" color="secondary" rounded="large">
        Large button
      </custom-button>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>