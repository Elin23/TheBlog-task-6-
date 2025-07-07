import blogImg1 from "/assets/imgs/blog-1-.png";
import blogImg2 from "/assets/imgs/blog-2-.png";
import blogImg3 from "/assets/imgs/blog-3-.png";
import blogImg4 from "/assets/imgs/blog-4-.png";
import blogImg5 from "/assets/imgs/blog-5-.png";
import blogImg6 from "/assets/imgs/blog-6-.png";
import blogImg7 from "/assets/imgs/blog-7-.png";
import blogImg8 from "/assets/imgs/blog-8-.png";
import blogImg9 from "/assets/imgs/blog-9-.png";
import blogImg10 from "/assets/imgs/blog-10-.png";
import blogImg11 from "/assets/imgs/blog-11-.png";
import blogImg12 from "/assets/imgs/blog-12-.png";
import blogImg13 from "/assets/imgs/blog-13-.png";
import blogImg14 from "/assets/imgs/blog-14-.png";
import blogImg15 from "/assets/imgs/blog-15-.png";
import blogImg16 from "/assets/imgs/blog-16-.png";
import blogImg17 from "/assets/imgs/blog-17-.png";
import blogImg18 from "/assets/imgs/blog-18-.png";
import blogImg19 from "/assets/imgs/blog-19-.png";
import type { Blog } from "../types/blog";

export const blogs : Blog[] = [
  {
    id: 1,
    title: "UX review presentations",
    img: blogImg1,
    hook: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    date: 'Sunday , 14 Jan 2025',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 2,
    title: 'Migrating to Linear 101' ,
    img: blogImg2,
    hook: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
    date: 'Sunday , 8 Jan 2025',
    categories: [
      { name: 'Design', color: 'darkCerulean', bg:'lightCerulean' },
      { name: 'Research', color: 'pink', bg:'lightPink' },
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 3,
    title: "Building your API Stack",
    img: blogImg3,
    hook: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    date: 'Monday , 7 Jan 2025',
    categories: [
      { name: 'Design', color: 'green', bg:'lightGreen' },
      { name: 'Research', color: 'pink', bg:'lightPink' },
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 4,
    title: "Grid system for better Design User Interface",
    img: blogImg4,
    hook: 'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate. ',
    date: 'Sunday , 7 Jan 2025',
    categories: [
      { name: 'Design', color: 'purple', bg: 'lightPurple' },
      { name: 'Interface', color: 'pink', bg: 'lightPink' },
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ],        
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 5,
    title: "Bill Walsh leadership lessons",
    img: blogImg5,
    hook: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    date: 'Friday , 6 Jan 2025',
    categories: [
      { name: 'Leadership', color: 'purple', bg:'lightPurple' },
      { name: 'Management', color: 'darkBlue', bg:'lightBlue' },
      {name: 'Presentation', color:'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ],        
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 6,
    title: "PM mental models",
    img: blogImg6,
    hook: 'Mental models are simple expressions of complex processes or relationships.',
    date: 'Sunday , 5 Jan 2025',
    categories: [
      { name: 'Product', color: 'darkCerulean', bg:'lightCerulean' },
      { name: 'Research', color: 'blue', bg:'lightBlue' },
      {name: 'Frameworks', color: 'red', bg: 'lightRed'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 7,
    title: "What is Wireframing?",
    img: blogImg7,
    hook: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    date: 'Wednesday , 4 Jan 2025',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 8,
    title: "How collaboration makes us better designers",
    img: blogImg8,
    hook: 'Collaboration can make our teams stronger, and our individual designs better.',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 9,
    title: "Our top 10 Javascript frameworks to use",
    img: blogImg9,
    hook: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    date: 'Sunday , 4 Jan 2024',
    categories: [
      { name: 'Software Development', color: 'green', bg: 'lightGreen' },
      { name: 'Tools', color: 'pink', bg:'lightPink' },
      {name: 'SaaS', color: 'red', bg:'lightRed'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Podcast: Creating a better CX Community",
    img: blogImg10,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Podcasts', color: 'purple', bg:'lightPurple' },
      { name: 'Customer Success', color: 'darkBlue', bg:'lightBlue' },
      {name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 11,
    title: "Podcast: Creating a better CX Community",
    img: blogImg8,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  
  {
    id: 12,
    title: "Podcast: Creating a better CX Community",
    img: blogImg5,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 13,
    title: "Podcast: Creating a better CX Community",
    img: blogImg1,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 14,
    title: "Podcast: Creating a better CX Community",
    img: blogImg3,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 15,
    title: "Podcast: Creating a better CX Community",
    img: blogImg2,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 16,
    title: "Podcast: Creating a better CX Community",
    img: blogImg7,
    hook: 'What is Wireframing?',
    date: 'Sunday , 3 Jan 2025',
    categories: [
      { name: 'Design', color: 'purple', bg:'lightPurple' },
      { name: 'Research', color: 'blue', bg: "lightBlue" },
      { name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 17,
    title: "Podcast: Creating a better CX Community",
    img: blogImg9,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'green', bg: 'lightGreen' },
      { name: 'Research', color: 'blue', bg:'lightBlue' },
      {name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 18,
    title: "Podcast: Creating a better CX Community",
    img: blogImg10,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'green', bg: 'lightGreen' },
      { name: 'Research', color: 'blue', bg:'lightBlue' },
      {name: 'Presentation', color: 'purple', bg:'lightPurple'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 19,
    title: "Podcast: Creating a better CX Community",
    img: blogImg4,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 5 Jan 2024',
    categories: [
      { name: 'Design', color: 'darkCerulean', bg:'lightCerulean' },
      { name: 'Research', color: 'red', bg:'lightRed' },
      {name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },

  {
    id: 20,
    title: "Podcast: Creating a better CX Community",
    img: blogImg7,
    hook: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    date: 'Sunday , 1 Jan 2023',
    categories: [
      { name: 'Design', color: 'darkCerulean', bg:'lightCerulean' },
      { name: 'Research', color: 'red', bg:'lightRed' },
      {name: 'Presentation', color: 'pink', bg:'lightPink'}
    ],
    text: ["A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.", 
                 "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."],
    sections: [
      {
        title: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        img: blogImg11,
        caption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content:"There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "",
            content: "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "Breaking Down the Grid",
            subLabel: "",
            content: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Columns:",
            content: "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            LinkLabel: "",
            link: ""
          },
          {
            mainLabel: "",
            subLabel: "Gutters:",
            content: "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg12,
        caption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        sections: [
          {
            mainLabel: "Examples of Grids in Use",
            secLabel: "Example 1: Hierarchical Grid",
            subLabel: "",
            content: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
            LinkLabel: "",
            link: ""
          },
        ]
      },
      {
        title: "",
        img: blogImg13,
        caption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple).",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 2: Column Grid",
            subLabel: "",
            content: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
            LinkLabel: "Ritual.com,",
            link: "https://ritual.com/"
          },
        ]
      },
      {
        title: "",
        img: blogImg14,
        caption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 3: Modular Grid",
            subLabel: "",
            content: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
            LinkLabel: "Behance",
            link: "https://www.behance.net/"
          },
        ]
      },
      {
        title: "",
        img: blogImg15,
        caption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Example 4: Breaking the Grid",
            subLabel: "",
            content: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
            LinkLabel: "Shrine from Google’s Material Studies",
            link: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
          },
        ]
      },
      {
        title: "",
        img: blogImg16,
        caption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        sections: [
          {
            mainLabel: "",
            secLabel: "Benefits of the Grid",
            subLabel: "",
            listLabel:"Using a grid benefits both end users and the designers alike:",
            list: ["Designers can quickly put together well-aligned interfaces.", "Users can easily scan predictable grid-based interfaces",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ],
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
        ]
      },
      {
        title: "",
        img: blogImg17,
        caption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
          {
            mainLabel: "",
            subLabel: "",
            content: "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
            LinkLabel: "",
            link: ""
          }
        ], 
        sections: [
          {
            mainLabel: "Choosing and Setting Up Your Grid",
            secLabel: "",
            subLabel: "",
            content: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
            LinkLabel: "responsive web design.",
            link: "https://www.nngroup.com/articles/responsive-web-design-definition/"
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Choose the right grid for your needs.",
            content: "Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
          },
          {
            mainLabel: "",
            secLabel: "",
            subLabel: "Spend time setting up your grid",
            content: "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
          },
        ]
      },
      {
        title: "",
        img: blogImg18,
        caption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Always place content within columns, not gutters.",
            content: "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
          },
        ]
      },
      {
        title: "",
        img: blogImg19,
        caption: "Content or elements should be placed within and across columns, not gutters.",
        sections: [
          {
            mainLabel: "",
            subLabel: "Consider using an 8px grid system.",
            content: "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
          },
          {
            mainLabel: "Conclusion",
            subLabel: "",
            content: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
          }
        ]
      }
    ]
  },
]

