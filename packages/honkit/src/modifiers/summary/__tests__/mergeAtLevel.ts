import Immutable from "immutable";
const Summary = require("../../../models/summary");
const File = require("../../../models/file");

describe("mergeAtLevel", () => {
    const mergeAtLevel = require("../mergeAtLevel");
    const summary = Summary.createFromParts(File(), [
        {
            articles: [
                {
                    title: "1.1",
                    path: "1.1",
                },
                {
                    title: "1.2",
                    path: "1.2",
                },
            ],
        },
        {
            title: "Part I",
            articles: [],
        },
    ]);

    test("should edit a part", () => {
        const beforeChildren = summary.getByLevel("1").getArticles();
        const newSummary = mergeAtLevel(summary, "1", { title: "Part O" });
        const edited = newSummary.getByLevel("1");

        expect(edited.getTitle()).toBe("Part O");
        // Same children
        expect(Immutable.is(beforeChildren, edited.getArticles())).toBe(true);
    });

    test("should edit a part", () => {
        const beforePath = summary.getByLevel("1.2").getPath();
        const newSummary = mergeAtLevel(summary, "1.2", { title: "Renamed article" });
        const edited = newSummary.getByLevel("1.2");

        expect(edited.getTitle()).toBe("Renamed article");
        // Same children
        expect(Immutable.is(beforePath, edited.getPath())).toBe(true);
    });
});
