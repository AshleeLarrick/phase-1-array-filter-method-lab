function findMatching(names, filter_condition) {
    return names.filter(function (name) {
        return name.toLowerCase() == filter_condition.toLowerCase();
      });
}

function fuzzyMatch(names, letters) {
    return names.filter(
            function (name) {
        return name.startsWith(letters);
        }
      );
}

function matchName(drivers, list) {
    return drivers.filter(
        function (driver) {
            return driver.name.toLowerCase() == list.toLowerCase();
        }
      );
}