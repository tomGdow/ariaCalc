describe("My Converter", function () {
    it("should add plus to a string", function () {
        expect(Converter.btn_plus_fn(2)).toBe("2+");
    }),

        it("should add minus to a string", function () {
            expect(Converter. btn_subtract_fn(2)).toBe("2-");
        }),

        it("should add modulus to a string", function () {
            expect(Converter. btn_modulus_fn(2)).toBe("2%");
        }),

        it("should evaluate a string", function () {
            expect(Converter. btn_equals_fn("2+2")).toBe(4);
        })



})
