import Modifiers from "./modifiers";

export default {
    Parse: require("./parse"),

    // Models
    Book: require("./models/book"),
    FS: require("./models/fs"),
    File: require("./models/file"),
    Summary: require("./models/summary"),
    Glossary: require("./models/glossary"),
    Config: require("./models/config"),
    Page: require("./models/page"),
    PluginDependency: require("./models/pluginDependency"),

    // Modifiers
    SummaryModifier: Modifiers.Summary,
    ConfigModifier: Modifiers.Config,

    // Constants
    CONFIG_FILES: require("./constants/configFiles"),
    IGNORE_FILES: require("./constants/ignoreFiles"),
    DEFAULT_PLUGINS: require("./constants/defaultPlugins"),
    EXTENSIONS_MARKDOWN: require("./constants/extsMarkdown"),
    EXTENSIONS_ASCIIDOC: require("./constants/extsAsciidoc"),
};
