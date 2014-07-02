package edu.xylu.algo;

import java.util.ArrayList;
import java.util.List;

public class SentenceParser {


    public List<String> parse(String input) {
        List<String> suffixes = new ArrayList<String>();
        suffixes.add(input);
        return parse("", suffixes);
    }

    private List<String> parse(String prefix, List<String> suffixes) {
        List<String> results = new ArrayList<String>();
        while (!suffixes.isEmpty()) {

            String suffix = suffixes.get(0);
            char inputChar = suffix.charAt(0);

            if (suffix.length() == 1) {
                suffixes.remove(0);
                results.add(prefix + inputChar);
                continue;
            }

            if (inputChar == '{') {
                List<String> newSuffixes = findNewSuffixes(suffixes);
                results.addAll(parse(prefix, newSuffixes));
                continue;
            }
            suffixes.set(0, suffix.substring(1));
            results.addAll(parse(prefix + inputChar, suffixes));


        }
        return results;
    }

    private List<String> findNewSuffixes(List<String> suffixes) {
        //TODO [mkwiecie] implement
        List<String> newSuffixes = new ArrayList<String>();
//        for()
//        int openBracesCount = 1;
        return newSuffixes;
    }


}
