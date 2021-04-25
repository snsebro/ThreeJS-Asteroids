import React from 'react'
import * as THREE from 'three'

export default function Scene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  const geometry = new THREE.SphereGeometry();
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
  animate();
  // document.body.appendChild( renderer.domElement );
  return (
    <div>
      {renderer.domElement}
    </div>
  )
}