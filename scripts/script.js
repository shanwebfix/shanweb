function loadSection(path, elementId, callback) {
  console.log("Loading:", path, "into:", elementId);
  fetch(path)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${path}, status: ${res.status}`);
      return res.text();
    })
    .then(html => {
      const container = document.getElementById(elementId);
      if (!container) {
        console.warn(`Container with id "${elementId}" not found!`);
        return;
      }
      container.innerHTML = html;

      if (typeof callback === "function") {
        setTimeout(callback, 0);
      }
    })
    .catch(err => {
      console.error("Error loading section:", err);
      const container = document.getElementById(elementId);
      if (container) container.innerHTML = "কনটেন্ট লোড করতে সমস্যা হয়েছে!";
    });
}

loadSection("/fetch/753qwyyuirtt4r2r7.html", "wutyitf489uh", () => {
  if (typeof inithadfa === "function") {
    inithadfa();
  } else {
    console.warn("inithadfa() not defined");
  }
});


loadSection("/fetch/hjsguaw22228y456.html", "gdsshhhhe");
loadSection("/fetch/seyaggiuafe.html", "saFrfwgwrf");
loadSection("/fetch/afcadjfcapppvkjdgfcgd.html", "sfgargwa");

// portfolio section with callback to initPortfolio
loadSection("/fetch/afafcadpppapappavhappapp.html", "sgwrafwe", () => {
  if (typeof initPortfolio === "function") {
    initPortfolio();
  } else {
    console.warn("initPortfolio() not defined");
  }
});

loadSection("/fetch/auyfcafwacawjhwffwjfjwhf.html", "svgsfwrrfwegwaergwr");


loadSection("/fetch/satrtvvtfvctvtvtctu.html", "rheafsazcf", () => {
  if (typeof inittsmsffgiuf === "function") {
    inittsmsffgiuf();
  } else {
    console.warn("inittsmsffgiuf() not defined");
  }
});

loadSection("/fetch/hagjsskglgssksgsskgsjkgsg.html", "wsyfaEFGsb");
loadSection("/fetch/acbavbcppabagppavbappabvapp.html", "sgsfsgaetgbhnje");

// faq

loadSection("/fetch/agcfadfffjksffflhffflfiufu.html", "weftwgsrfbdfjhrsye", () => {
  if (typeof initfaq === "function") {
    initfaq();
  } else {
    console.warn("initfaq() not defined");
  }
});

loadSection("/fetch/coyiocyiertocccuccyssfcyotycc.html", "ehestwarhst", () => {
  if (typeof initft === "function") {
    initft();
  } else {
    console.warn("initft() not defined");
  }
});


loadSection("/fetch/;oysiofofoifiofioffiofyfffsyfyofy.html", "saytfuyaetfdef", () => {
  if (typeof initsfspopsbvs === "function") {
    initsfspopsbvs();
  } else {
    console.warn("initsfspopsbvs() not defined");
  }
});







// io
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  });


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Disable drag (for images & content)
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

// Optional: Prevent saving images via right-click or dragging
document.querySelectorAll('img').forEach(function(img) {
  img.setAttribute('draggable', 'false');
  img.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
});






//dff
  setInterval(() => {
    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();
    if (after - before > 100) {
      window.location.href = "about:blank";
    }
  }, 1000);







// Portfolio Image Auto Scroll on Click + Manual Drag Scroll
document.querySelectorAll('.image-container').forEach(container => {
  // Click to auto scroll
  container.addEventListener('click', () => {
    container.scrollTop += 100;
  });

  // Drag to scroll manually
  let isDown = false;
  let startY;
  let scrollTop;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startY = e.pageY - container.offsetTop;
    scrollTop = container.scrollTop;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - container.offsetTop;
    const walk = (y - startY) * 1.5; // sensitivity
    container.scrollTop = scrollTop - walk;
  });
});






















 
  


