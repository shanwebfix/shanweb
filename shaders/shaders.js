let camera, scene, renderer, uniforms;

const mouse = { x: 0.5, y: 0.5 };

async function loadShader(path) {
  const response = await fetch(path);
  return await response.text();
}

async function init() {
  const vertexShader = await loadShader('shaders/vertex.glsl');
  const fragmentShader = await loadShader('shaders/fragment.glsl');

  camera = new THREE.Camera();
  camera.position.z = 1;
  scene = new THREE.Scene();

  uniforms = {
    u_time: { value: 0.0 },
    u_mouse: { value: new THREE.Vector2(mouse.x, mouse.y) }
  };

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.id = "shader-canvas1";
  document.querySelector('.hero1').appendChild(renderer.domElement);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = 1 - e.clientY / window.innerHeight;
    uniforms.u_mouse.value.set(mouse.x, mouse.y);
  });

  animate();
}

function animate(time) {
  requestAnimationFrame(animate);
  uniforms.u_time.value = time * 0.001;
  renderer.render(scene, camera);
}

init();














