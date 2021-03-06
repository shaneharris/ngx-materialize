/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
export class Handlers {
}
export class HandlePropChanges {
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.handlers) {
            this.executePropHandlers(changes);
        }
    }
    /**
     * @param {?=} props
     * @return {?}
     */
    executePropHandlers(props = this.handlers) {
        Object.keys(props).forEach(prop => {
            if (this.handlers[prop]) {
                const /** @type {?} */ previousValue = (/** @type {?} */ (props[prop])).previousValue;
                this.handlers[prop](previousValue);
            }
        });
    }
}
function HandlePropChanges_tsickle_Closure_declarations() {
    /** @type {?} */
    HandlePropChanges.prototype.handlers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXByb3AtY2hhbmdlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvaGFuZGxlLXByb3AtY2hhbmdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTTtDQUVMO0FBRUQsTUFBTTs7Ozs7SUFHSixXQUFXLENBQUMsT0FBc0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7Ozs7O0lBRUQsbUJBQW1CLENBQUMsUUFBa0MsSUFBSSxDQUFDLFFBQVE7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLHVCQUFNLGFBQWEsR0FBRyxtQkFBQyxLQUFLLENBQUMsSUFBSSxDQUFpQixFQUFDLENBQUMsYUFBYSxDQUFDO2dCQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFuZGxlcnMge1xyXG4gICBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBoYW5kbGVyczogSGFuZGxlcnM7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmhhbmRsZXJzKSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZVByb3BIYW5kbGVycyhjaGFuZ2VzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVQcm9wSGFuZGxlcnMocHJvcHM6IEhhbmRsZXJzIHwgU2ltcGxlQ2hhbmdlcyA9IHRoaXMuaGFuZGxlcnMpIHtcclxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBpZiAodGhpcy5oYW5kbGVyc1twcm9wXSkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSAocHJvcHNbcHJvcF0gYXMgU2ltcGxlQ2hhbmdlKS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnNbcHJvcF0ocHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=