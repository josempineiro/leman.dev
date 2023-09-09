<template>
  <li class="item" :style="{ ['--item-index']: index }">
    <Row class="item-header" align="center" gap="lg">
      <Icon
        class="item-icon"
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
      <Button color="accent" variant="outline" size="sm">
        <template v-if="active">View less</template>
        <template v-else>View more</template>
      </Button>
    </Row>
    <Collapsable :collapsed="active">
      <Row padding="sm">
        <Text
          is="p"
          whitespace="pre-wrap"
          color="secondary"
          :html="carrerItem.description"
        />
      </Row>
    </Collapsable>
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

.item {
  overflow: hidden;
  opacity: 0;
  animation: fade-in-down 0.25s ease forwards;
  animation-delay: calc(calc(0.2s * var(--item-index)) + 0.5s);
  cursor: pointer;
  background-color: var(--surface-color);
  color: var(--text-color-primary);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--border-color);
}

.item-header {
  position: relative;
  padding-left: 4rem;
}

.item-icon {
  position: absolute;
  transition-property: transform, opacity;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}

.item:hover {
  background-color: var(--surface-color);
}

.item:hover .item-icon {
  opacity: 1;
}

@media (max-width: 767px) {
  .item > .row {
    flex-wrap: wrap;
    padding-left: 0rem;
  }
  .item-icon {
    right: -0.5rem;
    top: -0.5rem;
    transform: translate(20%, -20%) rotate(20deg) scale(0.8);
    opacity: 0.3;
  }
  .item:hover .item-icon {
    transform: translate(0%, 0%) rotate(0deg) scale(1);
  }
  .item-header {
    justify-content: flex-end;
  }
}

@media (min-width: 768px) {
  .item-icon {
    left: 0;
    top: 50%;
    transform: translate(-20%, -70%) rotate(-20deg) scale(0.8);
    transform: translate(-33%, -94%) rotate(-20deg) scale(0.8);
    opacity: 0.3;
  }
  .item:hover .item-icon {
    transform: translate(0, -50%) rotate(0deg) scale(1);
  }
}
</style>
