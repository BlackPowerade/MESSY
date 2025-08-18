import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        coverage: {
            reporter: ['text', 'json-summary', 'json'], // Required reporters
            reportOnFailure: true, // Generate reports even if tests fail
        },
    },
});