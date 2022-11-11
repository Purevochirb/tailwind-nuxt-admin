<script>
export default {
  props: [
    'id'
  ],
  data() {
    return {
      debounceMs: 800,
      debounceTimeout: 0
    }
  },
  methods: {
    handleDebounce($event) {
      if(this.debounceTimeout) clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => this.$emit('debounce', $event), this.debounceMs)
    }
  },
  render: function (createElement) {
    const self = this
    const { config, value, disabled, readonly, filters, hideBorder, nullable, isSearch, isBetween, customComponent } = self
    let { dataTypeId, relationProp, caption, relationId, isMultiple } = config
    const { debounce } = self.$listeners
    if (dataTypeId.name === 'DataType') {
      dataTypeId = self.dataTypeId || { name: 'String' }
    } else if (dataTypeId.name === 'Datetime' && isSearch) {
      dataTypeId = { name: 'Date' }
    }
    const props = { 
      value,
      clearable: true,
      size: 'small',
      disabled,
      readonly,
      customComponent
    }
    const addClasses = { 'w-full': true, 'el-no-border': hideBorder }
    const addStyles = {}
    let childElements = []
    let componentName = 'el-input'
    if (dataTypeId.name === 'Datetime') {
      componentName = 'el-date-picker'
      if (hideBorder) {
        props['prefix-icon'] = '-'
      }
      addStyles['width'] = '100%'
      if (isBetween && isSearch) {
        props.type = 'daterange'
      } else {
        props.type = 'datetime'
      }
    } else if (dataTypeId.name === 'Date') {
      componentName = 'el-date-picker'
      if (hideBorder) {
        props['prefix-icon'] = '-'
      }
      addStyles['width'] = '100%'
      addClasses['date-picker'] = isSearch
      props.clearable = !isBetween
      if (isBetween) {
        props.type = 'daterange'
      }
    } else if (dataTypeId.name === 'Boolean') {
      componentName = 'core-checkbox'
      props.nullable = nullable
    } else if (dataTypeId.name === 'Schema') {
      componentName = 'core-select'
      if (relationId && relationId.schemaId) {
        props.schemaName = relationId.schemaId.name
      }
      props.relationProp = relationProp || (caption ? 'caption' : 'name')
      props.filters = filters
      props.valueKey = '_id'
      props.multiple = isMultiple
    } else if (dataTypeId.name === 'Number') {
      props.type = 'number'
    } else if (dataTypeId.name === 'Password') {
      props.showPassword = true
    } else if (dataTypeId.name === 'File') {
      if (isSearch) {
        props.type = 'number'
      } else {
        componentName = 'core-file'
        props.isMultiple = isMultiple
        props.coreSchema = self.coreSchema
        props.config = self.config
        props.id = self.id
      }
    }
    if(props.customComponent) {
      componentName = props.customComponent
    }
    return createElement(componentName, {
      props,
      class: addClasses,
      style: addStyles,
      nativeOn: {
        keydown: function($event) {
          if ($event.code === 'Enter' && debounce) {
            if(self.debounceTimeout) clearTimeout(self.debounceTimeout)
            self.$emit('debounce', $event)
            $event.preventDefault()
          }
        }
      },
      on: {
        input: function ($event) {
          self.$emit('input', $event)
          if (debounce) self.handleDebounce($event)
        },
        change: function($event) {
          self.$emit('change', $event, config)
        }
      }
    }, childElements)
  }
}
</script>