<template>
  <patro-paper>
    <patro-card class="mb-4">
      <p>solid</p>
      <div class="flex">
        <div>
          <patro-checkbox v-model="checked" color="primary" variant="solid"
            >primary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked1" color="secondary" variant="solid"
            >secondary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked2" color="success" variant="solid"
            >success</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked2" color="warning" variant="solid"
            >warning</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked3" color="danger" variant="solid"
            >danger</patro-checkbox
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>outlined</p>
      <div class="flex">
        <div>
          <patro-checkbox v-model="checked4" color="primary" variant="outlined"
            >primary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox
            v-model="checked5"
            color="secondary"
            variant="outlined"
            >secondary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked6" color="success" variant="outlined"
            >success</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked7" color="warning" variant="outlined"
            >warning</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked8" color="danger" variant="outlined"
            >danger</patro-checkbox
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Soft</p>
      <div class="flex">
        <div>
          <patro-checkbox v-model="checked9" color="primary" variant="soft"
            >primary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked10" color="secondary" variant="soft"
            >secondary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked11" color="success" variant="soft"
            >success</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked12" color="warning" variant="soft"
            >warning</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked13" color="danger" variant="soft"
            >danger</patro-checkbox
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Plain</p>
      <div class="flex">
        <div>
          <patro-checkbox v-model="checked14" color="primary" variant="plain"
            >primary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked15" color="secondary" variant="plain"
            >secondary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked16" color="success" variant="plain"
            >success</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked17" color="warning" variant="plain"
            >warning</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox v-model="checked18" color="danger" variant="plain"
            >danger</patro-checkbox
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Sizes</p>
      <div class="flex">
        <div>
          <patro-checkbox
            v-model="checked19"
            color="primary"
            variant="solid"
            size="small"
            >small</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox
            v-model="checked20"
            color="primary"
            variant="solid"
            size="normal"
            >Normal</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox
            v-model="checked21"
            color="primary"
            variant="solid"
            size="large"
            >Large</patro-checkbox
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Border radius</p>
      <div class="flex">
        <div>
          <patro-checkbox
            v-model="checked22"
            color="primary"
            variant="outlined"
            rounded="small"
            >small</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox
            v-model="checked23"
            color="primary"
            variant="outlined"
            rounded="normal"
            >Normal</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox
            v-model="checked24"
            color="primary"
            variant="outlined"
            rounded="large"
            >Large</patro-checkbox
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Disabled</p>
      <div class="flex">
        <div>
          <patro-checkbox
            v-model="checked"
            disabled
            color="primary"
            variant="solid"
            >primary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox disabled color="secondary" variant="solid"
            >secondary</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox disabled color="success" variant="solid"
            >success</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox disabled color="warning" variant="solid"
            >warning</patro-checkbox
          >
        </div>
        <div>
          <patro-checkbox disabled color="danger" variant="solid"
            >danger</patro-checkbox
          >
        </div>
      </div>
    </patro-card>
    <patro-card class="mb-4">
      <p>Groupping</p>
      <patro-checkboxGroup>
        <patro-checkbox
          v-model="checked"
          color="primary"
          variant="outlined"
        ></patro-checkbox>
        <patro-checkbox
          v-model="checked"
          color="primary"
          variant="outlined"
        ></patro-checkbox>
        <patro-checkbox
          v-model="checked"
          color="primary"
          variant="outlined"
        ></patro-checkbox>
        <patro-checkbox
          v-model="checked"
          color="primary"
          variant="outlined"
        ></patro-checkbox>
        <patro-checkbox
          v-model="checked"
          color="primary"
          variant="outlined"
        ></patro-checkbox>
      </patro-checkboxGroup>
    </patro-card>
  </patro-paper>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true,
      checked8: true,
      checked9: true,
      checked10: true,
      checked11: true,
      checked12: true,
      checked13: true,
      checked14: true,
      checked15: true,
      checked16: true,
      checked17: true,
      checked18: true,
      checked19: true,
      checked20: true,
      checked21: true,
      checked22: true,
      checked23: true,
      checked24: true,
    };
  },
};
</script>

<style>
</style>