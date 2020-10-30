// sample images
import covitTracker from "../assets/images/projects/covid19-tz.png"
import gravitus from "../assets/images/projects/gravitus.png"
import portfolioTheme from "../assets/images/projects/portfolio-template.png"

const projects = [
    {
        id: 1,
        name: "Soz PNS",
        url: "http://sozthegovt.netlify.app",
        category: ["Web"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra vestibulum netus lectus lacus pretium risus et faucibus volutpat.",
        imgSrc: gravitus,
        gallery: [],
        slug: "",
        type: "website"
    },
    {
        id: 2,
        name: "CEEPTz",
        url: "http://ceeptz.netlify.app",
        category: ["Web"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra vestibulum netus lectus lacus pretium risus et faucibus volutpat.",
        imgSrc: portfolioTheme,
        gallery: [],
        slug: "ceeptz",
        type: "website"
    },
    {
        id: 3,
        name: "Covid19 Tracker",
        category: ["Web", "App"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra vestibulum netus lectus lacus pretium risus et faucibus volutpat.",
        imgSrc: covitTracker,
        gallery: [],
        slug: "covid19-tracker",
        product: {
            url: "http://covid19-tz.netlify.app",
        },
        type: "website"
    },
    {
        id: 4,
        name: "Food Uber",
        category: ["Web"],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra vestibulum netus lectus lacus pretium risus et faucibus volutpat.",
        imgSrc: portfolioTheme,
        gallery: [],
        slug: "food-uber",
        product: {
            demo: "http://faraja-food-uber.herokuapp.com/",
            cost: {
                usd: 5000,
                tshs: 4500000
            }
        },
        type: "app"
    },
]

export default projects