document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  const svgButton = document.querySelector('.svg-button');
  const projectData = [
    {
      title: "Processing Satellite Signals from NOAA-18 and NOAA-19 APT System",
      desc: "Ever wondered how raw signals from space transform into stunning satellite images? This project takes signals from NOAA-18 and NOAA-19, demodulates them, and decodes the data to create visual representations of telemetry. Using advanced FM and AM demodulation techniques, the system processes APT 137MHz .wav files, extracting meaningful image data. Whether you're a space enthusiast or a researcher, this project offers an exciting look into satellite signal processing, all powered by Python and Jupyter Notebook.",
      stack: "Python on JupyterLab, GNURadio",
      per: "87%",
      link: "https://github.com/abioveprincipium/Noaa-demo_deco.git",
    },
    {
      title: "Radiation Pattern Analysis of a Horn Antenna",
      desc: "Unlock the secrets of electromagnetic wave propagation! This MATLAB-powered project analyzes the radiation pattern of a horn antenna operating at 10 GHz. By generating theoretical beam shapes and visualizing energy distribution, the script provides crucial insights into antenna performance. Whether you're optimizing designs or simply curious about wave physics, this project brings complex antenna theory to life with intuitive graphs and simulations.",
      stack: "MatLab",
      per: "100%",
      link: "https://github.com/abioveprincipium/Charakterystyka-promieniowania-anteny-tubowej.git",
    },
    {
      title: "Rain-Induced Signal Attenuation Using Crane’s Model",
      desc: "Rain doesn’t just ruin outdoor plans—it also disrupts microwave communication! This MATLAB-based project calculates how precipitation affects signal strength in the 1GHz–10GHz range using Crane’s empirical model. By simulating different rainfall intensities and propagation paths, it provides a detailed look at signal attenuation for both flat and inclined transmission paths. Essential for radio engineers and weather impact analysts, this project demonstrates the delicate balance between nature and technology.",
      stack: "MatLab",
      per: "100%",
      link: "https://github.com/abioveprincipium/Fall_Spread_Attentuation-.git",
    },
  ];

  function activateSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    const titleElem = document.getElementById("project-title");
    const descElem = document.getElementById("project-desc");
    const stackElem = document.getElementById("tech-stack");
    const text = projectData[index].stack;
    const words = text.split(" ");
    const stackPer = document.getElementById("pers");
    const linkElem  = document.getElementById("project-link");

    titleElem.textContent = projectData[index].title;
    descElem.textContent = projectData[index].desc;
    stackElem.innerHTML = `<span class="first-word">${words[0]} <br> </span> ${words.slice(1).join(" ")}`;
    stackPer.textContent = projectData[index].per;
    linkElem.href = projectData[index].link;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = dot.dataset.index; // 0, 1 lub 2
      activateSlide(index);
    });
  });

  svgButton.addEventListener('click', () => {
    svgButton.classList.add('clicked');
    console.log("Clicked");
    setTimeout(() => {
      svgButton.classList.remove('clicked');
    }, 1000);
  });
});

function showEmail() {
  var user = "alicjajagodaa";
  var domain = "gmail.com";
  var emailLink = document.getElementById("email-link");
  emailLink.href = "mailto:" + user + "@" + domain;
  emailLink.innerHTML = '<img class="icon" src="/img/hidden-email-icon.png" alt="Email">';

}
document.querySelector('.heart-link').addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('clicked');
});
