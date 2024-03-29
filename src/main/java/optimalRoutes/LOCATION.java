package optimalRoutes;

import com.fasterxml.jackson.annotation.JsonValue;

import java.util.Arrays;

public enum LOCATION {
    MARE_LAMENTORIUM("Mare Lamentorum",
            new AETHERYTES[]{AETHERYTES.SINUS_LACRIMARUM,
                    AETHERYTES.BESTWAYS_BURROW},
            "/images/mare_lamentorium.jpg"),
    TRAVNAIR("Thavnair",
            new AETHERYTES[]{AETHERYTES.PALAKAS_STAND, AETHERYTES.YEDLIHMAD,
                    AETHERYTES.THE_GREAT_WORK},
            "/images/travnair.jpg"),
    ULTIMA_THULE("Ultima Thule",
            new AETHERYTES[]{AETHERYTES.REAH_TAHRA, AETHERYTES.ABODE_OF_THE_EA,
                    AETHERYTES.BASE_OMICRON},
            "/images/ultima_thule.jpg"),
    GARLEMALD("Garlemald",
            new AETHERYTES[]{AETHERYTES.CAMP_BROKEN_GLASS, AETHERYTES.TERTIUM},
            "/images/garlemald.jpg"),
    LABYRINTHOS("Labyrinthos",
            new AETHERYTES[]{AETHERYTES.APORIA,
                    AETHERYTES.THE_ARCHEION, AETHERYTES.SHARLAYAN_HAMLET},
            "/images/labyrinthos.jpg"),
    ELPIS("Elpis",
            new AETHERYTES[]{AETHERYTES.ANAGNORISIS, AETHERYTES.THE_TWELVE_WONDERS,
                    AETHERYTES.POIETEN_OIKOS},
            "/images/elpis.jpg"),

    LAKELAND("Lakeland",
            new AETHERYTES[]{AETHERYTES.FORT_JOBB, AETHERYTES.THE_OSTALL_IMPERATIVE},
            "/images/lakeland.jpg"),
    IL_MHEG("Il Mheg",
            new AETHERYTES[]{AETHERYTES.LYDRA_LRAN, AETHERYTES.PLA_ENNI, AETHERYTES.WOLEKDORF},
            "/images/il_mheg.jpg"),
    AMH_ARAENG("Amh Araeng",
            new AETHERYTES[]{AETHERYTES.THE_INN_AT_JOURNEYS_HEAD,
                    AETHERYTES.MORD_SOUQ, AETHERYTES.TWINE}, "/images/amh_araeng.jpg"),
    THE_TEMPEST("The Tempest",
            new AETHERYTES[]{AETHERYTES.THE_ONDO_CUPS, AETHERYTES.THE_MACARENSES_ANGLE},
            "/images/the_tempest.jpg"),
    THE_RAKTIKA_GREATWOOD("The Rak'tika Greatwood",
            new AETHERYTES[]{AETHERYTES.SLITHERBOUGH, AETHERYTES.FANOW},
            "/images/the_raktika_greatwood.jpg"),
    KHOLUSIA("Kholusia",
            new AETHERYTES[]{AETHERYTES.STILLTIDE, AETHERYTES.WRIGHT, AETHERYTES.TOMRA},
            "/images/kholusia.jpg");


    private final String key, fileName;
    private final AETHERYTES[] aetherytes;

    LOCATION(String key, AETHERYTES[] aetherytes, String fileName) {
        this.key = key;
        this.aetherytes = aetherytes;
        this.fileName = fileName;
    }

    public String getKey() {
        return key;
    }

    public AETHERYTES[] getAetherytes() {
        return aetherytes;
    }

    public String getFileName() {
        return fileName;
    }

    public static LOCATION getByKey(String key) {
        return Arrays.stream(LOCATION.values())
                .filter(location -> location.getKey().equals(key))
                .findFirst()
                .orElse(null);
    }
}
