<template>
  <li
    :class="{
      'carrer-item': true,
      active: active,
    }"
    :style="{ ['--carrer-item-index']: index }"
  >
    <Row class="carrer-item-header" align="center" gap="lg">
      <Icon
        class="carrer-item-icon"
        size="3rem"
        :name="carrerItem.icon"
        color="currentColor"
      />
      <Col gap="sm">
        <Text is="h4" color="accent" size="lg">
          {{ carrerItem.title }}
        </Text>
        <Row align="center" gap="sm">
          <Text color="primary">
            <time :datetime="carrerItem.date.start">{{
              carrerItem.date.start
            }}</time>
            -
            <time :datetime="carrerItem.date.end">{{
              carrerItem.date.end
            }}</time>
          </Text>
          <Text color="accent">·</Text>
          <Text color="secondary">
            {{ carrerItem.duration }}
          </Text>
        </Row>
      </Col>
    </Row>
    <Collapsable :collapsed="active">
      <Row padding="sm">
        <Text
          is="p"
          whitespace="pre-wrap"
          class="carrer-item-description"
          color="secondary"
          :html="carrerItem.description"
        />
      </Row>
    </Collapsable>
    <Button
      class="carrer-item-view-more-button"
      color="accent"
      variant="text"
      width="full"
    >
      <template v-if="active">
        <Icon size="2rem" name="mdi:chevron-up" color="currentColor" />
      </template>
      <template v-else>
        <Icon size="2rem" name="mdi:chevron-down" color="currentColor" />
      </template>
    </Button>
  </li>
</template>

<script setup>
defineProps({
  carrerItem: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
@keyframes fade-in-down {
  from {
    transform: translateY(-25%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.carrer-item {
  overflow: hidden;
  opacity: 0;
  animation: fade-in-down 0.25s ease forwards;
  animation-delay: calc(calc(0.2s * var(--carrer-item-index)) + 0.5s);
  cursor: pointer;
  background-color: var(--surface-color);
  color: var(--text-color-primary);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0;
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  transition: background-color 0.25s ease-in-out;
}

.carrer-item.active {
  transform: translate(0, -50%) rotate(0deg) scale(1);
  opacity: 1;
}

.carrer-item.active .carrer-item-icon {
  transform: translate(0%, 0%) rotate(0deg) scale(1);
  opacity: 1;
}

.carrer-item-header {
  position: relative;
}

.carrer-item-icon {
  position: absolute;
  transition-property: transform, opacity;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}

.carrer-item-view-more-button {
  padding: 0;
}

.carrer-item-description {
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-color-secondary);
}

@media (max-width: 767px) {
  .carrer-item > .row {
    flex-wrap: wrap;
    padding-left: 0rem;
  }
  .carrer-item-icon {
    right: -0.5rem;
    top: -0.5rem;
    transform: translate(20%, -20%) rotate(20deg) scale(0.8);
    opacity: 0.3;
  }

  .carrer-item-header {
    justify-content: flex-end;
  }

  .carrer-item-view-more-button {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .carrer-item-icon {
    left: 0;
    top: 50%;
    transform-origin: left bottom;
    transform: translate(-33%, -94%) rotate(-20deg) scale(2);
    opacity: 0.3;
  }
  .carrer-item-header,
  .carrer-item-description {
    padding-left: 4rem;
  }
  .carrer-item:hover {
    background-color: var(--surface-hover-color);
  }
  .carrer-item:hover .carrer-item-icon {
    transform: translate(0, -50%) rotate(-20deg) scale(1.2);
    opacity: 0.6;
  }
  .carrer-item.active .carrer-item-icon {
    transform: translate(0, -50%) rotate(-20deg) scale(1.2);
    opacity: 1;
  }
  .carrer-item-view-more-button {
    opacity: 0;
  }
  .carrer-item:hover .carrer-item-view-more-button {
    opacity: 1;
  }
}
</style>
