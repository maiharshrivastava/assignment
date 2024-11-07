functions.add('map-keys', function ({ ruleset: { rules } } = { ruleset: { rules: [] } }) {
	const keys = []

	rules.forEach(rule => {
		if (! (rule instanceof tree.Declaration))
			return

		const { name: key } = rule.eval(this.context)

		keys.push(new tree.Anonymous(key))
	})

	return new tree.Value(keys)
})
