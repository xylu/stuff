package lambda.streams;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.stream.Collectors.groupingBy;
import static java.util.stream.Collectors.mapping;

public class Streams {

    public static void main(String[] args) {
        List<Locale> locales = Arrays.asList(Locale.CANADA, new Locale("Germany", "Switzerland"), new Locale("French", "Switzerland"), new Locale("English", "Switzerland"));
        Map<String, Set<String>> languagesByCountries = locales.stream().collect(
                groupingBy(Locale::getCountry,
                        mapping(Locale::getLanguage, Collectors.toSet())));

        languagesByCountries.forEach((country, languages) -> {
            System.out.printf("In %s they speak:%s\n", country, languages.stream().collect(Collectors.joining(",")));
        });

        //Violating NONITERFERENCE requirement
        Stream<Locale> localesStream = locales.stream();
        localesStream.forEach(l -> {
            if (l.getCountry().equals("Switzerland")) locales.remove(l);
        });
    }
}
