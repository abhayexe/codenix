// Default camera position when scene loads
// Adjust these values to change the initial camera view
export const defaultCamera = {
  position: [-1, 1.5, 2],
  lookAt: [1, 1.5, 0.2],
};

// Camera positions for each hotspot
export const cameraTargets = {
  monitor: {
    position: [-2, 1.5, 0],
    lookAt: [1, 1.5, -0.2],
  },
  desk: {
    position: [-2, 1.5, 0.7],
    lookAt: [1, 1.5, 0.7],
  },
  keyboard: {
    position: [0.9, 1.3, 0.2],
    lookAt: [0.8, 0.95, -0.3],
  },
};
