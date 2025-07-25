const express = require('express');
const router = express.Router();
const { 
  createSession, 
  updateSession, 
  getSessionById, 
  getRecentSessions, 
  deleteSession,
  getUserStats,
  logSet
} = require('../controllers/sessionController');

// GET /api/sessions - Get recent sessions
router.get('/', getRecentSessions);

// POST /api/sessions - Start new workout session
router.post('/', createSession);

// GET /api/sessions/:id - Get specific session with all sets
router.get('/:id', getSessionById);

// PUT /api/sessions/:id - Update/complete session
router.put('/:id', updateSession);

// POST /api/sessions/:id/sets - Log a set to a session
router.post('/:id/sets', logSet);

// DELETE /api/sessions/:id - Delete session
router.delete('/:id', deleteSession);

// GET /api/sessions/stats/:userId - Get user stats
router.get('/stats/:userId', getUserStats);

module.exports = router;