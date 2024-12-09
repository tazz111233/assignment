// evaluateAcademicStanding.test.js
const evaluateAcademicStanding = require('./evaluateAcademicStanding');

describe('evaluateAcademicStanding', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('should return "Good" standing and provide correct advice for Computer Science major with GPA > 3', () => {
        const result = evaluateAcademicStanding(3.6, 'Computer Science');
        expect(result).toBe('Good');
        expect(consoleSpy).toHaveBeenCalledWith("Your academic standing is good. Consider taking advanced courses in algorithms and data structures.");
        expect(consoleSpy).toHaveBeenCalledWith("With your GPA, you may be eligible for honors program consideration.");
    });

    test('should return "Average" standing and provide correct advice for Engineering major with GPA between 2 and 3', () => {
        const result = evaluateAcademicStanding(2.5, 'Engineering');
        expect(result).toBe('Average');
        expect(consoleSpy).toHaveBeenCalledWith("Your academic standing is average. Attend review sessions for difficult subjects.");
    });

    test('should return "Probation" standing and provide correct advice for any major with GPA <= 2', () => {
        const result = evaluateAcademicStanding(1.8, 'Business');
        expect(result).toBe('Probation');
        expect(consoleSpy).toHaveBeenCalledWith("Your academic standing is below average. It's important to prioritize improving your grades and seeking academic support.");
    });

    test('should return "Good" standing without honors advice for GPA > 3 but < 3.5', () => {
        const result = evaluateAcademicStanding(3.2, 'Engineering');
        expect(result).toBe('Good');
        expect(consoleSpy).toHaveBeenCalledWith("Your academic standing is good. Focus on your core engineering courses.");
        expect(consoleSpy).not.toHaveBeenCalledWith("With your GPA, you may be eligible for honors program consideration.");
    });

    test('should return "Good" standing and provide default advice for unknown major with GPA > 3', () => {
        const result = evaluateAcademicStanding(3.1, 'History');
        expect(result).toBe('Good');
        expect(consoleSpy).toHaveBeenCalledWith("Your academic standing is good. Plan your course schedule accordingly.");
    });
});
