# Project Plan — Interactive 3D Personal Room Website

## 1. Project Overview

This project is a **web-based interactive 3D personal room experience**. The website renders a fully modeled room (desk, computer, keyboard, shelves, decor) and allows users to **interact with objects inside the 3D scene**. When specific objects are clicked or tapped, the camera **smoothly animates** to cinematic close-up views, revealing contextual information or UI overlays.

The experience is intended to feel **immersive, polished, and portfolio-grade**, similar to modern WebGL-based personal websites.

---

## 2. Core Goals

* Render a realistic 3D room in the browser
* Allow object-based interaction using mouse/touch
* Animate the camera to predefined positions when objects are clicked
* Keep camera motion smooth and cinematic
* Separate visual content (3D) from informational content (HTML/UI)
* Maintain clean, scalable architecture suitable for future expansion

---

## 3. Technology Stack

### Frontend Framework

* **React**: `18.x`

  * Stable and well-documented
  * Works seamlessly with React Three Fiber

### 3D Rendering

* **three.js**: `0.152.x`

  * Mature API
  * Widely supported and documented

* **@react-three/fiber**: `8.x`

  * React renderer for Three.js
  * Declarative scene management

* **@react-three/drei**: `9.x`

  * Camera controls, loaders, helpers
  * Reduces boilerplate significantly

### Animation

* **gsap**: `3.12.x`

  * Reliable, smooth camera animations
  * Industry standard for motion

### Utilities

* **leva** (optional): `0.9.x`

  * Debug controls for camera positions

---

## 4. Project Structure

```
src/
 ├─ components/
 │   ├─ Scene.jsx           # Main 3D scene
 │   ├─ Room.jsx            # Loaded room model
 │   ├─ Hotspots.jsx        # Invisible interactive meshes
 │   ├─ CameraController.jsx# Camera animation logic
 │
 ├─ ui/
 │   ├─ Overlay.jsx         # HTML UI triggered by interactions
 │
 ├─ data/
 │   ├─ cameraTargets.js    # Centralized camera positions
 │
 ├─ App.jsx
 └─ main.jsx
```

---

## 5. Scene Architecture

### Canvas Setup

* Use `<Canvas>` from React Three Fiber
* Enable shadows and physically correct lighting
* Camera is controlled via OrbitControls but temporarily disabled during animations

### Lighting Strategy

* HDRI environment lighting for realism
* One or two area/spot lights for mood
* Subtle ambient occlusion

---

## 6. Room Model Handling

* Room is imported as a **GLTF/GLB** model
* Geometry is **static** (no runtime modification)
* Materials are PBR-compliant

Model guidelines:

* Real-world scale (meters)
* Clean naming for major objects (monitor, desk, keyboard)
* No animations baked into the model

---

## 7. Interaction System (Critical)

### Hotspots

* Invisible meshes placed near important objects
* These meshes are the **only clickable elements**
* Visual meshes remain interaction-agnostic

Purpose:

* Clean separation of interaction and visuals
* Avoid accidental clicks on complex geometry

---

## 8. Raycasting Logic

* Use R3F's `useThree()` and `Raycaster`
* On pointer down:

  * Detect intersected hotspot
  * Extract hotspot ID
  * Trigger camera animation

Raycasting must:

* Support mouse and touch
* Ignore non-interactive meshes

---

## 9. Camera System Design

### Camera Targets

Camera positions are **predefined and centralized**.

Each target contains:

* `position`: where the camera moves
* `lookAt`: what the camera focuses on

Example structure:

```
monitor: {
  position: [1.4, 1.6, -0.3],
  lookAt: [1.2, 1.4, -0.8]
}
```

---

## 10. Camera Animation Rules

* Camera movement uses **GSAP**
* Position and target animate simultaneously
* OrbitControls disabled during motion
* Controls re-enabled after animation completes

Animation characteristics:

* Duration: ~1–1.5 seconds
* Ease: `power2.inOut`
* No sudden jumps

---

## 11. UI Overlay System

* HTML overlays rendered outside the canvas
* Triggered by camera focus state
* Example overlays:

  * About section on monitor focus
  * Project list on desk focus

Overlay rules:

* Fade in/out
* Must not block pointer events unless active

---

## 12. State Management

* Use React state for:

  * Current active hotspot
  * Whether camera is animating

* Avoid global state libraries unless necessary

---

## 13. Performance Considerations

* Use DRACO compression for models
* Limit draw calls
* Avoid real-time shadows where unnecessary
* Cap device pixel ratio

---

## 14. Progressive Enhancement

Future features can include:

* Scroll-driven camera transitions
* Mobile-optimized navigation
* Dynamic day/night lighting
* Screen mesh rendering live content

---

## 15. Development Philosophy

* Declarative over imperative
* Predictable camera behavior
* Clean separation of concerns
* Maintainability over clever hacks

This plan should be followed strictly to ensure a stable, scalable, and professional-quality 3D web experience.
