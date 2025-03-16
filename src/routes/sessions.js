const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getSessions,
  getSession,
  createSession,
  updateSession,
  deleteSession
} = require('../controllers/sessions');

router.use(protect);

router
  .route('/')
  .get(getSessions)
  .post(authorize('therapist', 'admin'), createSession);

router
  .route('/:id')
  .get(getSession)
  .put(authorize('therapist', 'admin'), updateSession)
  .delete(authorize('therapist', 'admin'), deleteSession);

module.exports = router;