package fcParsing;

public enum PARSE_KEY {
    MINIONS_NUMBER("minions number"),
    MOUNTS_NUMBER("mounts number"),
    CAPPED_JOBS("capped jobs");
    private final String name;

    PARSE_KEY(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
