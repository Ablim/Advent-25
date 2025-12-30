namespace AdventDotNet;

public static class Day5
{
    public static string SolvePart1(string[] rows)
    {
        var intervals = rows
            .Where(row => row.Contains('-'))
            .Select(row =>
            {
                var parts = row.Split('-');
                return (start: long.Parse(parts[0]), end: long.Parse(parts[1]));
            })
            .ToArray();
        var ingredients = rows
            .Where(row => !row.Contains('-') && !string.IsNullOrEmpty(row))
            .Select(long.Parse)
            .ToArray();

        var sum = ingredients.Count(i => intervals.Any(interval => interval.start <= i && i <= interval.end));
        return $"{sum}";
    }
}