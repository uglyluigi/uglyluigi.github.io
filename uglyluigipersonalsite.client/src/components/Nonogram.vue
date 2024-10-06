<script setup>
    import * as THREE from 'three';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({alpha: true});

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    const loader = new FontLoader();

    loader.load('fonts/Ebrima_Bold.json', function (font) {
            
        const geometry = new TextGeometry('Hello three.js!', {
            font: font,
            size: 10,
            depth: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 1,
            bevelOffset: 0,
            bevelSegments: 5
        });

        var textMesh = new THREE.Mesh(geometry, material);
        textMesh.position.x = 0;
        textMesh.position.y = 0;
        scene.add(textMesh);
    });

    camera.position.z = 500;

    renderer.setAnimationLoop(() => renderer.render(scene, camera));

    function generateNonogramMesh(width, height) {

    }
</script>

<template>
	
</template>

<style scoped>

</style>
