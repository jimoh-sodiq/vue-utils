<template>
  <div class="p-4">
    <h1>Custom Select</h1>
    <p>This is a custom input component that has many features</p>
    <div>
      <h3>Dependencies are:</h3>
      <ul>
        <li>None</li>
      </ul>
    </div>
    <div>
      <h3>Features are:</h3>
      <ul>
        <li>open and closed state</li>
        <li>Slot for the details</li>
      </ul>
    </div>
    <div>
      <h3>Props and prop types:</h3>
      <ul>
        <li>summary: string | number</li>
        <li>open?: boolean</li>
      </ul>
    </div>

    <main>
      <h1>Demo here</h1>
      <section class="flex flex-col gap-y-5">
        <div>
          <p class="text-sm text-blue-600 font-semibold">Open State</p>
          <CustomAccordion summary="I am open by default" open>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              rerum iste aperiam nulla incidunt? Quos repellendus, id suscipit
              earum omnis facere repudiandae iste! Non nam odit quae minima sunt
              harum.
            </p>
          </CustomAccordion>
        </div>
        <div>
          <p class="text-sm text-blue-600 font-semibold">Closed State</p>
          <CustomAccordion summary="I am closed  by default">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              rerum iste aperiam nulla incidunt? Quos repellendus, id suscipit
              earum omnis facere repudiandae iste! Non nam odit quae minima sunt
              harum.
            </p>
          </CustomAccordion>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
