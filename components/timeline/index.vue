<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Business Case Training Sessions</h2>

      <!-- Events Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TimelineItem v-for="event in events" :key="event.title" :event="event" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const events = [
  {
    title: "Session 1: Introduction to Business Case & Strategic Thinking",
    description: "Learn about Business Case Competitions structure, MECE Framework, and hypothesis-driven approach. Analyze real cases to identify core issues.",
    date: "Week 1",
    location: "Training Room A",
    image: "/app.png"
  },
  {
    title: "Session 2: Market & Competitive Analysis",
    description: "Master Porter's Five Forces, PESTLE Analysis, TAM/SAM/SOM, and SWOT analysis. Apply these frameworks to real market cases.",
    date: "Week 2",
    location: "Training Room A",
    image: "/Thumbnail.png"
  },
  {
    title: "Session 3: Business Strategy & Financials",
    description: "Explore growth strategies, Business Model Canvas, and financial forecasting including break-even analysis, ROI, and NPV.",
    date: "Week 3",
    location: "Training Room A",
    image: "/app.png"
  },
  {
    title: "Session 4: Marketing & Go-to-Market Strategy",
    description: "Dive into 4Ps Marketing Mix, STP, digital marketing strategies, and develop comprehensive Go-to-Market plans.",
    date: "Week 4",
    location: "Training Room A",
    image: "/Thumbnail.png"
  },
  {
    title: "Session 5: Pitching & Storytelling",
    description: "Learn effective pitch structure, public speaking techniques, and Q&A handling. Practice group pitching with detailed feedback.",
    date: "Week 5",
    location: "Training Room A",
    image: "/app.png"
  },
  {
    title: "Session 6: Mock Business Case Competition (Preliminary)",
    description: "Team-based business case challenge. Develop strategy, analyze market, prepare financials, and pitch to judging panel.",
    date: "Week 6",
    location: "Competition Hall",
    image: "/Thumbnail.png"
  },
  {
    title: "Session 7: Final Pitch Preparation & Revisions",
    description: "Refine strategies based on feedback, optimize pitches, and practice handling tough questions from judges.",
    date: "Week 7",
    location: "Training Room A",
    image: "/app.png"
  },
  {
    title: "Session 8: Business Case Simulation (Final Competition)",
    description: "Full-scale mock competition with complete pitches, rebuttals, scoring, and detailed evaluations from instructors.",
    date: "Week 8",
    location: "Competition Hall",
    image: "/Thumbnail.png"
  }
];
</script>