const {onRequest} = require("firebase-functions/v2/https");
const admin = require('firebase-admin');
admin.initializeApp();

exports.truncatePlayerLockDown = onRequest({ cors: true }, async (req, res) => {
    try {
        const collectionRef = admin.firestore().collection('player-lock-down');
        const snapshot = await collectionRef.get();

        // Check if there are documents to delete
        if (snapshot.empty) {
            return res.status(200).send('No documents to delete.');
        }

        // Create a batch to delete documents
        const batch = admin.firestore().batch();
        snapshot.forEach(doc => {
            batch.delete(doc.ref);
        });

        await batch.commit();
        return res.status(200).send('All documents deleted successfully.');
    } catch (error) {
        console.error('Error deleting documents:', error);
        return res.status(500).send('Error deleting documents.');
    }
});

exports.truncatePlayerCorrectAnswer = onRequest({ cors: true }, async (req, res) => {
    try {
        const collectionRef = admin.firestore().collection('player-correct-answer');
        const snapshot = await collectionRef.get();

        // Check if there are documents to delete
        if (snapshot.empty) {
            return res.status(200).send('No documents to delete.');
        }

        // Create a batch to delete documents
        const batch = admin.firestore().batch();
        snapshot.forEach(doc => {
            batch.delete(doc.ref);
        });

        await batch.commit();
        return res.status(200).send('All documents deleted successfully.');
    } catch (error) {
        console.error('Error deleting documents:', error);
        return res.status(500).send('Error deleting documents.');
    }
});

exports.truncateAlreadyChecked = onRequest({ cors: true }, async (req, res) => {
    try {
        const collectionRef = admin.firestore().collection('already-checked');
        const snapshot = await collectionRef.get();

        // Check if there are documents to delete
        if (snapshot.empty) {
            return res.status(200).send('No documents to delete.');
        }

        // Create a batch to delete documents
        const batch = admin.firestore().batch();
        snapshot.forEach(doc => {
            batch.delete(doc.ref);
        });

        await batch.commit();
        return res.status(200).send('All documents deleted successfully.');
    } catch (error) {
        console.error('Error deleting documents:', error);
        return res.status(500).send('Error deleting documents.');
    }
});

exports.truncatePlayerAnswerDisplay = onRequest({ cors: true }, async (req, res) => {
    try {
        const collectionRef = admin.firestore().collection('player-answer-display');
        const snapshot = await collectionRef.get();

        // Check if there are documents to delete
        if (snapshot.empty) {
            return res.status(200).send('No documents to delete.');
        }

        // Create a batch to delete documents
        const batch = admin.firestore().batch();
        snapshot.forEach(doc => {
            batch.delete(doc.ref);
        });

        await batch.commit();
        return res.status(200).send('All documents deleted successfully.');
    } catch (error) {
        console.error('Error deleting documents:', error);
        return res.status(500).send('Error deleting documents.');
    }
});
