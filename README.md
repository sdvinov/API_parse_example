# Simple API parse example
This is an example of how to parse an ajax response using jQuery.

## Step 1
Make an ajax call with `$.ajax`. Needed keys are: 
* `url` - Path to source (either local or somewhere from the internet)
* `dataType` - type of input (for example `json`)
* `success` - what happens if the call is successful and response received

## Step 2
In case of success, do so:

```javascript
function(parsed_json) { 
  var var1 = parsed_json['key1']['key1.1'];
  var var2 = parsed_json['key1']['key1.2'];
  var var3 = parsed_json['key1']['key1.3'];
  var var4 = parsed_json['key2']['key2.1'];
  var var5 = parsed_json['key2']['key1.2'];
  ...
 }
```

## Step 3
Append to a block:

```javascript
$('#appendToThisID').append(
  '<div>' + var1 + '</div>'
  '<div>' + var2 + '</div>'
  '<div>' + var3 + '</div>'
  '<div>' + var4 + '</div>'
  '<div>' + var5 + '</div>'
);
```
