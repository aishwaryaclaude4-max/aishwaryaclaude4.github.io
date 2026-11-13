/* ==========================================================
   AURA DRAWING CLASS – EDIT YOUR CONTENT HERE
   You never need to touch index.html to change text, contact
   details or images. Save the file, refresh the browser.
   ========================================================== */
window.SITE = {
  /* ---- CONTACT ---- */
  phone: "7994855769",              // shown on the site
  whatsapp: "917994855769",         // international format, no + or spaces
  email: "artbyaishwaryasreenivas@gmail.com",
  instagram: "https://www.instagram.com/art_by_aishwarya_sreenivas/",
  waGreeting: "Hello Aishwarya, I'd like to know more about AURA Drawing Class.",

  /* ---- ABOUT ---- */
  name: "Aishwarya Sreenivas",
  role: "Artist, Drawing Teacher and Software Engineer",
  bio: [
    "Aishwarya Sreenivas is an artist, drawing teacher and software engineer. She founded AURA Drawing Class to share the joy of drawing with young learners.",
    "Her work spans pencil drawings, acrylic paintings, watercolor, oil pastels, portraits and landscapes, and she brings the same patience and attention to detail into every class she teaches.",
    "Write your own story here: how you started, what inspires you and how you teach. Edit these paragraphs in js/content.js."
  ],

  /* ---- IMAGES ---- (all paths are inside assets/images/) */
  base: "assets/images/",

  /* ---- PORTFOLIO ----
     Each line: category, folder, file name prefix, how many pieces.
     Example: ["Pencil Drawings","pencil-drawings","pencil-drawing",3]
     expects pencil-drawings/pencil-drawing-01.jpg, -02.jpg, -03.jpg
     Slots without a file show a soft "add artwork" placeholder.
     For custom titles, add single pieces to `extraArtworks` below. */
  portfolioSlots: [
    ["Pencil Drawings",       "pencil-drawings",      "pencil-drawing",      3],
    ["Acrylic Paintings",     "acrylic",              "acrylic-painting",    3],
    ["Watercolor",            "watercolor",           "watercolor",          3],
    ["Oil Pastels",           "oil-pastel",           "oil-pastel",          3],
    ["Portraits",             "portraits",            "portrait",            3],
    ["Landscapes",            "landscapes",           "landscape",           3],
    ["Creative Experiments",  "creative-experiments", "creative-experiment", 3]
  ],
  extraArtworks: [
    // { file: "pencil-drawings/my-sketch.jpg", title: "My Sketch", cat: "Pencil Drawings" },
  ],

  /* ---- ACADEMY ---- */
  grades: [
    ["LKG – UKG",  "Little explorers", "Playful mark-making, shapes, colours and holding a pencil with confidence."],
    ["1st – 4th",  "Young artists",    "Basic drawing, shading, colour mixing and simple still life and nature studies."],
    ["5th – 7th",  "Growing artists",  "Observation, proportion, perspective and working with pencil, pastel and watercolor."],
    ["8th – 10th", "Advanced learners","Portfolio-building, realistic rendering, composition and exam-ready drawing skills."]
  ],
  levels: [
    ["Beginner",     "Lines, shapes, basic shading and first colour work."],
    ["Intermediate", "Form, light and shadow, texture and a wider range of media."],
    ["Advanced",     "Realism, composition, personal style and finished artworks."]
  ],

  /* ---- ACHIEVEMENTS (add only real ones) ----
     { year: "2024", title: "Exhibition name", detail: "Where / what happened" } */
  achievements: [],

  /* ---- EXHIBITION PHOTOS: files inside assets/images/exhibitions/ ----
     { file: "exhibitions/exhibition-2024-01.jpg", title: "Exhibition 2024" } */
  exhibitions: [],

  /* ---- CERTIFICATES: files inside assets/images/certificates/ ----
     { file: "certificates/certificate-drawing-01.jpg", title: "Certificate title" } */
  certificates: []
};
