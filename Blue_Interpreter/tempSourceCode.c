
function int sum_of_first_n_squares (int n)
{
	int sum;

	sum = 0;
	if (n >= 1)
	{
		sum = n * (n + 1) * (2 * n + 1) / 6;
	}
	return sum;
}
