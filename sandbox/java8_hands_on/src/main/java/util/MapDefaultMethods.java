package util;


import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

// based on http://blog.jooq.org/tag/java-8/
public class MapDefaultMethods {
    static Map<Integer, Integer> cache
            = new ConcurrentHashMap<>();

    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.put("C", 3);

        System.out.println("putIfAbsent pulled from ConcurrentMap to Map: " + map.putIfAbsent("A", 3));
        System.out.println("Has Removed when A -> 3: " + map.remove("A", 3));

        computeSamples(map);

        map.forEach((k, v) -> System.out.println("k:" + k + " v:" + v));

        mergeSamples(map);


        for (int i = 0; i < 10; i++)
            System.out.println(
                    "f(" + i + ") = " + fibonacciWithComputeIfAbsent(i));
    }

    private static void mergeSamples(Map<String, Integer> map) {
        map.put("X", 1);
        System.out.println(map.merge(
                "X", 1, (v1, v2) -> null));
        System.out.println("After merge:" + map);


        try {
            Integer value = null;
            System.out.println(map.merge(
                    "X", value, (v1, v2) -> null));
        } catch (Exception nullValueNotAllowed) {
            nullValueNotAllowed.printStackTrace();
        }


    }


    static void computeSamples(Map<String, Integer> map) {
        // Compute a new value for the existing key
        System.out.println(map.compute("A",
                (k, v) -> v == null ? 42 : v + 41));
        System.out.println(map);

        // This will add a new (key, value) pair
        System.out.println(map.compute("X",
                (k, v) -> v == null ? 42 : v + 41));
        System.out.println(map);


    }

    static int fibonacciWithComputeIfAbsent(int i) {
        if (i == 0)
            return i;

        if (i == 1)
            return 1;

        return cache.computeIfAbsent(i, (key) ->
        {
            System.out.println(
                    "Slow calculation of " + key);
            return fibonacciWithComputeIfAbsent(i - 2)
                    + fibonacciWithComputeIfAbsent(i - 1);
        });
    }
}
