const scene = new THREE.Scene();
scene.background = new THREE.Color(0xED4257);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.fog = new THREE.Fog(0xFFFFFF, 30, 40);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 35;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.y += 0.02;
    torusKnot.rotation.z += 0.02;
    renderer.render(scene, camera);
}
animate();