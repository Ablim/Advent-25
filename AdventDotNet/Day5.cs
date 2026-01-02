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
    
    public static string SolvePart2(string[] rows)
    {
        var intervals = rows
            .Where(row => row.Contains('-'))
            .Select(row =>
            {
                var parts = row.Split('-');
                return (start: long.Parse(parts[0]), end: long.Parse(parts[1]));
            })
            .OrderBy(interval => interval.start)
            .ToList()
            .Merge();

        var sum = intervals.Sum(interval => interval.end - interval.start + 1);
        return $"{sum}";
    }

    private static List<(long start, long end)> Merge(this List<(long start, long end)> intervals)
    {
        var result = new List<(long start, long end)>();
        var candidate = intervals[0];

        for (var i = 1; i < intervals.Count; i++) {
            if (intervals[i].start <= candidate.end)
            {
                if (intervals[i].end > candidate.end)
                {
                    candidate.end = intervals[i].end;
                }
            }
            else
            {
                result.Add(candidate);
                candidate = intervals[i];
            }
        }

        result.Add(candidate);
        return result;
    }
}