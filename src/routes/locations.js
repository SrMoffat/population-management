import express from 'express';

const router = express.Router();

router.post(
    '/createLocation',
);

router.get(
    '/listLocations',
);

router.patch(
    '/updateLocation',
);

router.delete(
    '/deleteLocation',
);

export default router;