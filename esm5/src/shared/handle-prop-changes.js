/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
Handlers = /** @class */ (function () {
    function Handlers() {
    }
    return Handlers;
}());
/**
 * @abstract
 */
export { Handlers };
var HandlePropChanges = /** @class */ (function () {
    function HandlePropChanges() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    HandlePropChanges.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.handlers) {
            this.executePropHandlers(changes);
        }
    };
    /**
     * @param {?=} props
     * @return {?}
     */
    HandlePropChanges.prototype.executePropHandlers = /**
     * @param {?=} props
     * @return {?}
     */
    function (props) {
        var _this = this;
        if (props === void 0) { props = this.handlers; }
        Object.keys(props).forEach(function (prop) {
            if (_this.handlers[prop]) {
                var /** @type {?} */ previousValue = (/** @type {?} */ (props[prop])).previousValue;
                _this.handlers[prop](previousValue);
            }
        });
    };
    return HandlePropChanges;
}());
export { HandlePropChanges };
function HandlePropChanges_tsickle_Closure_declarations() {
    /** @type {?} */
    HandlePropChanges.prototype.handlers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXByb3AtY2hhbmdlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvaGFuZGxlLXByb3AtY2hhbmdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7OztBQUFBOzs7bUJBRkE7SUFJQyxDQUFBOzs7O0FBRkQsb0JBRUM7QUFFRCxJQUFBOzs7Ozs7O0lBR0UsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztLQUNGOzs7OztJQUVELCtDQUFtQjs7OztJQUFuQixVQUFvQixLQUErQztRQUFuRSxpQkFPQztRQVBtQixzQkFBQSxFQUFBLFFBQWtDLElBQUksQ0FBQyxRQUFRO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIscUJBQU0sYUFBYSxHQUFHLG1CQUFDLEtBQUssQ0FBQyxJQUFJLENBQWlCLEVBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQ2xFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDcEM7U0FDRixDQUFDLENBQUM7S0FDSjs0QkF0Qkg7SUF1QkMsQ0FBQTtBQWpCRCw2QkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhhbmRsZXJzIHtcclxuICAgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgaGFuZGxlcnM6IEhhbmRsZXJzO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVQcm9wSGFuZGxlcnMoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlUHJvcEhhbmRsZXJzKHByb3BzOiBIYW5kbGVycyB8IFNpbXBsZUNoYW5nZXMgPSB0aGlzLmhhbmRsZXJzKSB7XHJcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbcHJvcF0pIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gKHByb3BzW3Byb3BdIGFzIFNpbXBsZUNoYW5nZSkucHJldmlvdXNWYWx1ZTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzW3Byb3BdKHByZXZpb3VzVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19