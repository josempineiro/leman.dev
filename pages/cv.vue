<template>
  <div class="container">
    <aside class="aside">
      <SidebarHeader />
      <Separator direction="row" margin="md" padding="xs" />
      <Socials />
      <Separator direction="row" margin="md" padding="xs" />
      <Scrollable class="sidebar-content">
        <Col gap="md" padding="md" class="entries">
          <Row>
            <Text is="h4" color="accent" size="lg">Experience:</Text>
          </Row>
          <Row>
            <Col gap="xs">
              <Row align="center" gap="sm">
                <Text typography="number" whitespace="pre" size="xl" color="accent">
                  {{ "8 " }}
                </Text>
                <Text color="primary">years</Text>
              </Row>
              <Row align="center" gap="sm">
                <Text typography="number" whitespace="pre" size="xl" color="accent">
                  {{ "6 " }}
                </Text>
                <Text color="primary">teams</Text>
              </Row>
              <Row align="center" gap="sm">
                <Text typography="number" size="xl" whitespace="pre" color="accent">{{
                  "8 "
                }}</Text>
                <Text color="primary">products</Text>
              </Row>
              <Row align="center" gap="sm">
                <Text typography="number" size="xl" whitespace="pre" color="accent">{{
                  "20"
                }}</Text>
                <Text color="primary">artifacts</Text>
              </Row>
            </Col>
          </Row>
          <Separator direction="row" margin="md" padding="xs" />
          <Row>
            <Text is="h4" color="accent" size="lg">Languages:</Text>
          </Row>
          <Row>
            <Col gap="md">
              <template v-for="language in languages" :key="language.name">
                <Row class="row row-center row-space-between row-gap-sm">
                  <Col>
                    <Row class="row">
                      <Text color="primary">
                        {{ language.name }}
                      </Text>
                    </Row>
                  </Col>
                  <Col>
                    <Row gap="xs" justify="end">
                      <template v-for="(value, index) in 5" :key="index">
                        <Star :active="value <= language.level" />
                      </template>
                    </Row>
                  </Col>
                </Row>
              </template>
            </Col>
          </Row>
          <Separator direction="row" />
          <Row
            align="center"
            gap="sm"
          >
            <Text
              is="h4"
              color="accent"
              size="lg"
            >
              Technologies:
            </Text>
          </Row>
          <Row
            align="center"
            gap="sm"
            wrap
          >
            <template
              v-for="technology in technologies"
              :key="technology"
            >
              <Text whitespace="pre">
                <Text
                  size="lg"
                  color="accent"
                >
                  #
                </Text>
                <Text>{{ technology }}</Text>
              </Text>
            </template>
          </Row>
        </Col>
      </Scrollable>
    </aside>
    <div class="content">
      <div
        :class="{
          header: true,
          visible: isIntersecting,
        }"
      >
        <div class="banner">
          <Text
            class="banner-title"
            is="h2"
            size="xl"
          >
            Review my projects and dev stuffs
          </Text>
          <Text
            class="banner-message"
            is="code"
            typography="monospace"
          >
              {{
              `\<code\>
                I build stuffs using dev tools like React, Vue, Tailwind, Vite, and more...
              </code>`
              }}
          </Text>
          <Button
            class="banner-action"
            href="/portfolio"
            color="accent"
            variant="fill"
          >
            Discover now
          </Button>
        </div>
      </div>
      <div ref="target" />
      <section class="section">
        <ul class="grid">
          <template
            v-for="(carrerItem, index) in carrer"
            :key="index"
          >
            <CarrerItem
              @click="toggleItem(index)"
              :carrer-item="carrerItem"
              :index="index"
              :active="isItemOpen(index)"
              :style="{ ['--item-index']: index }"
            />
          </template>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "clear",
});

const technologies = ref([
  "TypeScript",
  "JavaScript",
  "Vue",
  "React",
  "Node",
  "Nuxt",
  "Next",
  "HTML",
  "CSS",
  "Sass",
  "Tailwind",
  "StyledComponents",
  "Vite",
  "Webpack",
  "Git",
]);

const languages = ref([
  {
    name: "Spanish",
    context: "Native",
    level: 5,
  },
  {
    name: "English",
    context: "Professional",
    level: 3,
  },
  {
    name: "Portuguese",
    context: "Intermediate",
    level: 4,
  },
  {
    name: "Italian",
    context: "Intermediate",
    level: 3,
  },
]);

const carrer = ref([
  {
    icon: "mdi:university-outline",
    title: "Bachelor's Degree in Computer Engineering Studies",
    date: {
      start: "Sep 2008",
      end: "Feb 2015",
    },
    duration: "6 years",
    description: `
During my undergraduate studies, I acquired a strong foundation in computer science and consolidated my knowledge in mathematical sciences, with a particular emphasis on algorithm design. I gained proficiency in various programming languages, including <b>C, Python, JavaScript, and Java</b>.

One of the highlights of my academic journey was the collaborative nature of my coursework, where I actively engaged in team-based projects, honing my <b>teamwork and communication skills</b>. These experiences exposed me to diverse perspectives and fostered an environment of collective <b>problem-solving</b>.`,
  },
  {
    icon: "material-symbols:diversity-3-rounded",
    title: "Study Abroad Experience in Italy",
    date: {
      start: "Sep 2013",
      end: "Aug 2014",
    },
    duration: "1 year",
    description: `
As part of my undergraduate studies, I had the opportunity to study abroad at the University of Bologna in Italy. This experience allowed me to immerse myself in a new culture and broaden my horizons. I gained a deeper understanding of the importance of <b>diversity and inclusion</b> in the workplace, as I worked alongside students from different backgrounds and cultures.
`,
  },
  {
    icon: 'fluent-mdl2:learning-tools',
    title: "Internship student at Everis",
    date: {
      start: "Feb 2015",
      end: "Oct 2015",
    },
    duration: "9 months",
    description: `
I had the opportunity to work on a project for a public service agency, AMTEGA, where I actively contributed to the <b>development</b> of software solutions. This experience allowed me to apply theoretical knowledge to <b>real-world projects</b>, enhance my problem-solving skills, and collaborate effectively with a multidisciplinary <b>team</b>.`,
  },
  {
    icon: "mdi:certificate",
    title: "Final Degree Project",
    date: {
      start: "Oct 2015",
      end: "Feb 2016",
    },
    duration: "5 months",
    description: `
As a culmination of my academic pursuits, I undertook a comprehensive research project for my bachelor's <b>thesis</b>. I designed and developed an application for the <i>classification and early detection of network traffic anomalies, applying <b>artificial intelligence</b> techniques</i>. This project not only allowed me to apply my academic knowledge in a practical setting but also deepened my understanding of the intersection between computer science and artificial intelligence.`,
  },
  {
    icon: "mdi:new-box",
    title: "Junior Frontend at Vippter",
    date: {
      start: "Mar 2016",
      end: "Dec 2017",
    },
    duration: "2 years",
    description: `
During my time at Vippter, I held a pivotal role as a Frontend Developer in an innovative social media platform tailored for celebrities and their followers. Vippter was renowned for its engaging contests and giveaways, designed to enhance the connection between celebrities and their fanbase.

I was responsible for spearheading the frontend development efforts, utilizing modern technologies like Vue.js, npm, and Sass to craft responsive and visually captivating user interfaces. My role involved close collaboration with both the design and backend teams, translating design concepts into interactive web applications that delivered an exceptional user experience.

Beyond coding, I ensured the implementation of state-of-the-art web development best practices, prioritizing website performance and cross-browser compatibility. My contributions directly impacted user engagement, as I worked diligently to create intuitive and user-friendly interfaces.

In addition to my coding responsibilities, I actively participated in code reviews to uphold high standards of code quality, maintainability, and adherence to coding standards. My commitment to driving innovation and continuous improvement in frontend development processes was a key aspect of my role.

Working within a talented cross-functional team, I consistently delivered solutions on time and aligned with project requirements. My experience at Vippter not only enhanced my frontend development skills but also deepened my understanding of user-centered design and the significance of crafting seamless digital experiences within a fast-paced environment.`,
  },
  {

    icon: "mdi:dev-to",
    title: "From Junior to Senior at Trileuco",
    date: {
      start: "Jan 2018",
      end: "Actual",
    },
    duration: "6 years",
    description: `
In my current job at Trileuco, I have had the opportunity to work on a wide range of projects, from small-scale websites to large-scale enterprise applications. I have been involved in all stages of the software development lifecycle, from requirements gathering to deployment.

I take pride in my ability to adapt to new technologies and learn new skills quickly. I work with a variety of frontend technologies around React, and Next.js, and I am proficient in backend technologies like Node.js and GraphQL.
  
The last few years have been a period of tremendous growth for me, both personally and professionally. I have had the opportunity to work on challenging projects, collaborate with talented individuals, and learn from my mistakes. I have grown as a developer and as a person, and I am excited to continue my journey of learning and growth.`,

  },
]);
const visibleItems = ref([]);
function openItem(index) {
  visibleItems.value[index] = true;
}
function closeItem(index) {
  visibleItems.value[index] = false;
}
function toggleItem(index) {
  if (visibleItems.value[index]) {
    closeItem(index);
  } else {
    openItem(index);
  }
}
function isItemOpen(index) {
  return Boolean(visibleItems.value[index]);
}


const target = ref(null);
const observer = ref(null);
const isIntersecting = ref(true);

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      isIntersecting.value = entry.isIntersecting;
    },
    {
      root: document.body,
      rootMargin: "-88px",
      threshold: 0,
    }
  );

  const observe = () => {
    if (target.value) {
      observer.value.observe(target.value);
    }
  };

  observe();
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>


<style lang="scss" scoped>
.relative {
  position: relative;
}

.container {
  display: flex;
  gap: 2rem;
  max-width: 1024px;
  margin: 0 auto;
  background-color: var(--bg-color);
  color: var(--text-color-primary);
  padding: 1rem;
}

.aside {
  background-color: var(--surface-color);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  opacity: 0;
}

.entries {
  padding: 1rem !important;
}

.description {
  max-width: 80ch;
}

.description b {
  font-weight: 500;
  color: var(--text-color-primary);
}

.description i {
  font-style: italic;
}

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

@keyframes fade-in-right {
  from {
    transform: translateX(-25%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {
  display: flex;
  animation: fade-in-down 0.5s ease forwards;
  opacity: 0;
  animation-delay: 0.25s;
  border-radius: 1rem;
}

.banner {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-color);
  transition: height 0.5s ease;
  justify-content: space-between;
}

.header>* {
  position: relative;
}

.banner::before {
  content: "";
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(8px) opacity(0.5) grayscale(0.8);
  background-size: cover;
  background-image: url("https://e0.pxfuel.com/wallpapers/639/598/desktop-wallpaper-web-development.jpg");
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 767px) {
  .container {
    flex-direction: column;
  }

  .aside {
    width: 100%;
    animation: fade-in-down 0.5s ease forwards;
  }

  .header {
    height: 80vh;
  }

  .content {
    width: 100%;
  }

  .header {
    height: 30vh;
  }

  .banner {
    height: 100%;
  }
}

.section {
    padding-bottom: 2rem;
  }

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }

  .aside {
    flex-shrink: 0;
    flex-basis: 280px;
    height: 100%;
    animation: fade-in-right 0.5s ease forwards;
    position: sticky;
    top: 1rem;
    max-height: calc(100vh - 2rem);
  }

  .content {
    flex: 1;
    height: 100%;
  }

  .header {
    height: 30vh;
    position: sticky;
    top: 1rem;
    z-index: 1;
  }

  .banner {
    background: black;
    transition: height 0.5s ease;
    justify-content: space-between;
  }
  .banner > * {
    position: relative;
  }

  .banner-title {
    white-space: pre;
    line-height: 40px;
  }

  .header:not(.visible) .banner {
    flex-direction: row;
    width: 100%;
    height: 72px;
    justify-content: space-between;
  }
  .banner-message {
    white-space: pre-line;
  }
  .header:not(.visible) .banner-message {
    opacity: 0;
    display: none;
    align-self: flex-end;
    white-space: pre;
  }

  .header .banner-action {
    align-self: flex-end;
  }

  .header:not(.visible) .banner-action {
    align-self: flex-end;
  }

  .header.visible .banner {
    height: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
