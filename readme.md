# loadCSS
Loading CSS asynchronously

### Usage
```
<link rel="preload" href="mystyle.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="mystyle.css"></noscript>

<script src="loadcss.js"></script>
```

### Manual CSS loading
```javascript
<script>
loadCSS('mystyle.css');
</script>
 ```

**Using onload event**
```javascript
<script>
loadCSS('mystyle.css', function(link){

    console.log(link.href);

});
</script>
```