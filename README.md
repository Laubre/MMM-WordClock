# Module: MMM-WordClock
The `MMM-WordClock` module is for MagicMirror. It is a simple way to add an Word Clock to your [MagicMirror](https://github.com/MichMich/MagicMirror).

# Installing the module
1. Head over to your MagicMirror modules folder
   "cd home/pi/MagicMirror/modules"
   
2. Clone the repository
   git clone https://github.com/Laubre/MMM-WorldClock
   
## Using the module


To use this module, add it to the modules array in the `config/config.js` file:


````javascript
modules: [
	{
		module: "MMM-WordClock",
		position: "top_left",
		config: {
				width: "300px",
				height: "300px"
			}
		},
]
````

## Configuration options
The module has the same config options as the MMM-Iframe module by Desertblade (https://github.com/desertblade/iFrame)
In default settings the clock is german.
This can be changed by simply adding the url config parameter with one of the provides links.

Language links:
German: url: ["http://laurenzbremicker.de/wordclock/index.html#l=de"],
Bärndütsch: url: ["http://laurenzbremicker.de/wordclock/index.html#l=de_CH"],
Danish: url: ["http://laurenzbremicker.de/wordclock/index.html#l=dk"],
English: url: ["http://laurenzbremicker.de/wordclock/index.html#l=en"],
Spanish: url: ["http://laurenzbremicker.de/wordclock/index.html#l=de"],
French: url: ["http://laurenzbremicker.de/wordclock/index.html#l=fr"],
Italian: url: ["http://laurenzbremicker.de/wordclock/index.html#l=it"],
Portuguese: url: ["http://laurenzbremicker.de/wordclock/index.html#l=de"],

The following properties can be configured:


<table width="100%">
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
		<tr>
			<td><code>url</code></td>
			<td>the URL(s) in the iFrame<br>
				<br><b>Example:</b><code>["http://example.com/", "http://example2.com", "http://example3.com"]</code>
				<br><b>Default value:</b> <code>["http://magicmirror.builders/"]</code>
			</td>
		</tr>
		<tr>
			<td><code>updateInterval</code></td>
			<td>the update internal for the iFrame.  This setting will be active when there is more than 1 URL in the URL config.<br>
				<br><b>Example for 30 seconds:</b><code>0.5 * 60 * 1000</code>
				<br><b>Default value:</b> <code>"0.5 * 60 * 1000"</code>
			</td>
		</tr>		
		<tr>
			<td><code>width</code></td>
			<td>the width of the iFrame<br>
				<br><b>Example:</b><code>"100%"</code>
				<br><b>Example:</b><code>"200px"</code>
				<br><b>Default value:</b> <code>"100%"</code>
			</td>
		</tr>
		<tr>
			<td><code>height</code></td>
			<td>the width of the iFrame<br>
				<br><b>Example:</b><code>"100%"</code>
				<br><b>Example:</b><code>"300px"</code>
				<br><b>Default value:</b> <code>"100px"</code>
			</td>
		</tr>
</table>
