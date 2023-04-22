<template>
  <div class="p-4">
    <h1>Icon Management</h1>
    <p>
      Handling Icons and svgs are very important part of a large scale vuejs
      application. The benefits may not be seen for small apps, but when the
      size grows, maintaing the icons and SVGs will become very crucial in the
      code organization
    </p>
    <p>
      I have had the opportunity to experience various method of managing icons
      ( 4 to be precise ), some of which are known to many, while some are not
      really popular
    </p>
    <p>
      I will try to explain each of them and also implement all the various
      types in this repository for easy refrencing
    </p>

    <div>
      <h1>the methods</h1>
      <ul>
        <li><a href="#single-svg-vue">Using SVGs as vue components</a></li>
        <li>
          Using a single vue component (Icon.vue) but with many svgs within
        </li>
        <li>Using an icon libray like Iconify</li>
        <li>
          Using a single vue component (Icon.vue) but automatically handled
          using svg loader package and a little bit of code
        </li>
      </ul>
    </div>

    <div id="single-svg-vue">
      <h2>Using SVGs as vue components</h2>
      <p>
        This method requires you to create svgs as you would create reusable vue
        componets
      </p>
      <p>How it is done in this project</p>
      <ul>
        <li>Create a folder called icons in the components directory</li>
        <li>Add all the svgs as .vue files</li>
        <li>Simple right &#x1F923;</li>
        <li>this is an svg component rendered as a vue reusable component</li>
      </ul>
      <div>
        <h3>Conclusion</h3>
        <p>
          As much as this is a really simple method, it poses the difficulty of
          naming and also svg duplication when working with other, but it also
          provides the benefits of props and styling
        </p>
      </div>
    </div>

    <div id="single-svg-vue">
      <h2>Using SVGs as vue components</h2>
      <p>
        This method requires you to create svgs as you would create reusable vue
        componets
      </p>
      <p>How it is done in this project</p>
      <ul>
        <li>Create a folder called icons in the components directory</li>
        <li>Add all the svgs as .vue files</li>
        <li>Simple right &#x1F923;</li>
        <li>this is a component render as a vue reusable component</li>
      </ul>
      <div>
        <h3>Conclusion</h3>
        <p>
          As much as this is a really simple method, it poses the difficulty of
          naming and also svg duplication when working with other, but it also
          provides the benefits of props and styling
        </p>
      </div>
      <code> console.log('hello world') </code>
    </div>
  </div>
</template>
