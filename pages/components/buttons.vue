<template>
  <patro-paper>
    <patro-card class="mb-4">
      <p>solid</p>
      <div class="flex">
        <div>
          <patro-button v-model="check1" color="primary" variant="solid">primary</patro-button>
        </div>
        <div>
          <patro-button color="secondary" variant="solid"
            >secondary</patro-button
          >
        </div>
        <div>
          <patro-button color="success" variant="solid">success</patro-button>
        </div>
        <div>
          <patro-button color="warning" variant="solid">warning</patro-button>
        </div>
        <div>
          <patro-button color="danger" variant="solid">danger</patro-button>
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>outlined</p>
      <div class="flex">
        <div>
          <patro-button color="primary" variant="outlined"
            >primary</patro-button
          >
        </div>
        <div>
          <patro-button color="secondary" variant="outlined"
            >secondary</patro-button
          >
        </div>
        <div>
          <patro-button color="success" variant="outlined"
            >success</patro-button
          >
        </div>
        <div>
          <patro-button color="warning" variant="outlined"
            >warning</patro-button
          >
        </div>
        <div>
          <patro-button color="danger" variant="outlined">danger</patro-button>
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Soft</p>
      <div class="flex">
        <div>
          <patro-button color="primary" variant="soft">primary</patro-button>
        </div>
        <div>
          <patro-button color="secondary" variant="soft"
            >secondary</patro-button
          >
        </div>
        <div>
          <patro-button color="success" variant="soft">success</patro-button>
        </div>
        <div>
          <patro-button color="warning" variant="soft">warning</patro-button>
        </div>
        <div>
          <patro-button color="danger" variant="soft">danger</patro-button>
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Plain</p>
      <div class="flex">
        <div>
          <patro-button color="primary" variant="plain">primary</patro-button>
        </div>
        <div>
          <patro-button color="secondary" variant="plain"
            >secondary</patro-button
          >
        </div>
        <div>
          <patro-button color="success" variant="plain">success</patro-button>
        </div>
        <div>
          <patro-button color="warning" variant="plain">warning</patro-button>
        </div>
        <div>
          <patro-button color="danger" variant="plain">danger</patro-button>
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Sizes</p>
      <div class="flex">
        <div>
          <patro-button color="primary" variant="solid" size="small"
            >small</patro-button
          >
        </div>
        <div>
          <patro-button color="primary" variant="solid" size="normal"
            >Normal</patro-button
          >
        </div>
        <div>
          <patro-button color="primary" variant="solid" size="large"
            >Large</patro-button
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Border radius</p>
      <div class="flex">
        <div>
          <patro-button color="primary" variant="outlined" rounded="small"
            >small</patro-button
          >
        </div>
        <div>
          <patro-button color="primary" variant="outlined" rounded="normal"
            >Normal</patro-button
          >
        </div>
        <div>
          <patro-button color="primary" variant="outlined" rounded="large"
            >Large</patro-button
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Disabled</p>
      <div class="flex">
        <div>
          <patro-button disabled color="primary" variant="solid"
            >primary</patro-button
          >
        </div>
        <div>
          <patro-button disabled color="secondary" variant="solid"
            >secondary</patro-button
          >
        </div>
        <div>
          <patro-button disabled color="success" variant="solid"
            >success</patro-button
          >
        </div>
        <div>
          <patro-button disabled color="warning" variant="solid"
            >warning</patro-button
          >
        </div>
        <div>
          <patro-button disabled color="danger" variant="solid"
            >danger</patro-button
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Groupping</p>
      <patro-buttonGroup>
        <patro-button color="primary" variant="outlined">primary</patro-button>
        <patro-button color="primary" variant="outlined">secondary</patro-button>
        <patro-button color="primary" variant="outlined">success</patro-button>
        <patro-button color="primary" variant="outlined">warning</patro-button>
        <patro-button color="primary" variant="outlined">danger</patro-button>
      </patro-buttonGroup>
    </patro-card>
  </patro-paper>
</template>

<script>
export default {
    data() {
        return {
            check1: false,
            check2: false,
            check3: false,
            check4: false
        }
    }
};
</script>

<style>
</style>